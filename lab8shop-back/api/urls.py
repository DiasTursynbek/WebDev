from django.urls import path
from . import views

urlpatterns = [
    path('api/products/', views.ProductListView.as_view()),
    path('api/products/<int:id>/', views.ProductDetailView.as_view()),
    path('api/categories/', views.CategoryListView.as_view()),
    path('api/categories/<int:id>/', views.CategoryDetailView.as_view()),
    path('api/categories/<int:id>/products/', views.CategoryProductsView.as_view()),
]
