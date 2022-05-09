from django.shortcuts import render
from django.views.generic import View
from .models import JobPost
from django.http import HttpResponse
from django.contrib import messages
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser


# Create your views here.
def home(request):
    return render(request, 'index.html',{})

def post(request):
    if request.method=='POST':

        pcategory=request.POST['category']
        #return HttpResponse(pcategory)
        pdate=request.POST['date']
        pjobtitle=request.POST['jobtitle']
        pjobtype=request.POST['jobtype']
        #return HttpResponse(pjobtype)
        pqual=request.POST['qualification']
        pyear=request.POST['min_year']
        pduration=request.POST['duration']
        plocation=request.POST['location']

        preq=request.POST['requirements']
        pdesc=request.POST['description']
        addpost=JobPost(category=pcategory,date=pdate,jobtitle=pjobtitle,jobtype=pjobtype,qualification=pqual,min_year=pyear,duration=pduration,location=plocation,requirements=preq,description=pdesc)
        addpost.save()
        messages.info(request, 'Job Added')
    else:
        return render(request, 'jobPost.html',{})
    return render(request, 'jobPost.html',{})



def jobsearch(request):
    if request.method=='GET':
        showcat=JobPost.objects.all()
        showcat_serializer=JobPostSerializer(duration,many=True)
        return JsonResponse(showcat_serializer.data,safe=False)

        #return render(request,'index.html',{'JobPost':showcat})
'''
def jobsearch(request):
    query = request.GET.get(post)
    loc = request.GET.get('q')
    object_list = []
    if(query == None):
        object_list = JobPost.objects.all()
    else:
        title_list = JobPost.objects.filter(jobtitle__icontains=query).order_by('date')
        skill_list = JobPost.objects.filter(requirements__icontains=query).order_by('date')
        #company_list = JobPost.objects.filter(
            #company__icontains=query).order_by('date')
        job_type_list = JobPost.objects.filter(jobtype__icontains=query).order_by('date')
        for i in title_list:
            object_list.append(i)
        for i in skill_list:
            if i not in object_list:
                object_list.append(i)
        #for i in company_list:
        #    if i not in object_list:
        #        object_list.append(i)
        for i in job_type_list:
            if i not in object_list:
                object_list.append(i)
    if(loc == None):
        locat = JobPost.objects.all()
    else:
        locat = JobPost.objects.filter(
            location__icontains=loc).order_by('date')
    final_list = []
    for i in object_list:
        if i in locat:
            final_list.append(i)
    #paginator = Paginator(final_list, 20)
    #page_number = request.GET.get('page')
    #page_obj = paginator.get_page(page_number)
    context = {
        #'jobs': page_obj,
        'query': query,
    }
    return render(request, 'search.html', context)
'''

'''
class Search:
    def __init__(self) -> None:
        self.df_jobs = pd.DataFrame()
        self.job_desc = None
        self.vectorizer = None
        self.df = None
        def updateDataframe(self, newData):
            self.df_jobs.append(newData.to_csv())
            self.__vectorize()
        def __vectorize(self):
            self.df_jobs['job_description_tokenized'] = self.df_jobs['job_description'].map(
            lambda x: self.__clean(x))
            self.job_desc = self.df_jobs['job_description_tokenized']
            self.vectorizer = TfidfVectorizer()
            X = self.vectorizer.fit_transform(self.job_desc)
            self.df = pd.DataFrame(
            X.T.toarray(), index=self.vectorizer.get_feature_names())
            def __clean(self, doc):
                document_test = re.sub(r'[^\x00-\x7F]+', ' ', doc)
                document_test = re.sub(r'@\w+', '', document_test)
                document_test = document_test.lower()
                document_test = re.sub(r'[%s]' % re.escape(
                string.punctuation), ' ', document_test)
                document_test = re.sub(r'[0-9]', '', document_test)
                document_test = re.sub(r'\s{2,}', ' ', document_test)
                return document_test
                def search_jobs(self, q, df):
                    q = [q]
                    q_vec = self.vectorizer.transform(q).toarray().reshape(df.shape[0],)
                    sim = {}
                    for i in range(self.df_jobs.shape[0]):
                        sim[i] = np.dot(df.loc[:, i].values, q_vec) / \
                        np.linalg.norm(df.loc[:, i]) * np.linalg.norm(q_vec)
                        sim_sorted = sorted(sim.items(), key=lambda x: x[1], reverse=True)
                        job_names = []
                        for k, v in sim_sorted:
                            relevance = v*100
                            if relevance >= 10.0:
                                job_names.append(
                                {
                                'Relevance': relevance,
                                'Job Title': self.df_jobs['job_title'][k],
                                'Job Description': self.df_jobs['job_description'][k]
                                }
                                )
                                return pd.DataFrame(job_names, columns=['Relevance', 'Job Title', 'Job Description'])
                                '''
