from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.urls import re_path
from django.contrib import admin
from django_js_reverse.views import urls_js
from django.views.generic import TemplateView
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_jwt.views import verify_jwt_token
from django.views.decorators.cache import cache_page

from config.api import api

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(api.urls)),
    url(r'^auth/', include(('account.urls', 'account'), namespace='account')),
    re_path(r'^jsreverse/$', cache_page(3600)(urls_js), name='js_reverse'),
    url(r'^auth-jwt/', obtain_jwt_token, name='jwt_obtain_token'),
    url(r'^auth-jwt-refresh/', refresh_jwt_token, name='jwt_refresh_token'),
    url(r'^auth-jwt-verify/', verify_jwt_token, name='jwt_verify_token'),
]

if settings.DEBUG:
    # Media urls for development
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


class ExtraContextTemplateView(TemplateView):
    """
    Hack to pass some content to Template View
    """
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(ExtraContextTemplateView, self).get_context_data(**kwargs)
        context['DEBUG'] = settings.DEBUG
        context['GOOGLE_ANALYTICS'] = settings.GOOGLE_ANALYTICS
        return context


# App: Vue routing
urlpatterns += [url(r'^', ExtraContextTemplateView.as_view())]
