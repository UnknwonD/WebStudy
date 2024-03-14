from django.db import models

# Create your models here.
# python managy.py makemigrations
# python manage.py migrate -> db 와 연동시켜주는  데이터를 넣을 준비를 하는 구문.

# 1 class = item in db
class HelloWorld(models.Model):
    #CharField 문자열 필드   , null은 db에 저장할 때, 없어도 되는건지 설정해주는것 false시 필수적인 요소
    text = models.CharField(max_length=255, null=False)