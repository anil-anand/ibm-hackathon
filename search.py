import re
import string
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer


class Search:

    def __init__(self) -> None:
        self.__df_jobs = pd.DataFrame()
        self.__job_desc = None
        self.__vectorizer = None
        self.__df = None

    def updateDataframe(self, newData):
        self.__df_jobs = pd.concat([self.__df_jobs, newData])
        self.__vectorize()

    def __vectorize(self):
        self.__df_jobs['job_description_tokenized'] = self.__df_jobs['job_description'].map(
            lambda x: self.__clean(x))

        self.__job_desc = self.__df_jobs['job_description_tokenized']

        self.__vectorizer = TfidfVectorizer()
        X = self.__vectorizer.fit_transform(self.__job_desc)

        self.__df = pd.DataFrame(
            X.T.toarray(), index=self.__vectorizer.get_feature_names())

    def __clean(self, doc):

        document_test = re.sub(r'[^\x00-\x7F]+', ' ', doc)
        document_test = re.sub(r'@\w+', '', document_test)
        document_test = document_test.lower()
        document_test = re.sub(r'[%s]' % re.escape(
            string.punctuation), ' ', document_test)
        document_test = re.sub(r'[0-9]', '', document_test)
        document_test = re.sub(r'\s{2,}', ' ', document_test)

        return document_test

    def search_jobs(self, q):
        q = [q]
        q_vec = self.__vectorizer.transform(
            q).toarray().reshape(self.__df.shape[0],)
        sim = {}
        for i in range(self.__df_jobs.shape[0]):
            sim[i] = np.dot(self.__df.loc[:, i].values, q_vec) / \
                np.linalg.norm(self.__df.loc[:, i]) * np.linalg.norm(q_vec)

        sim_sorted = sorted(sim.items(), key=lambda x: x[1], reverse=True)
        job_names = []

        for k, v in sim_sorted:
            relevance = v*100
            if relevance > 0.0:
                job_names.append(
                    {
                        'Relevance': relevance,
                        'Job Title': self.__df_jobs['job_title'][k],
                        'Job Description': self.__df_jobs['job_description'][k],
                        'Job Type': self.__df_jobs['job_type'][k],
                        'Duration': self.__df_jobs['duration'][k]
                    }

                )
        return pd.DataFrame(job_names, columns=['Relevance', 'Job Title', 'Job Description', 'Job Type', 'Duration'])
