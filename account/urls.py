from django.urls import re_path
from django.conf import settings
from django.conf.urls.static import static
from account.views import CreateUserView


urlpatterns = [
    re_path('^signup/$', CreateUserView.as_view(), name='signup'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL + 'account/', document_root=settings.STATIC_ROOT)
