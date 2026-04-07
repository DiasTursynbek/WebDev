from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),
    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', views.CategoryDetailAPIView.as_view()),
    path('categories/<int:id>/products/', views.CategoryProductsAPIView.as_view()),
]