from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages

def user_login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, username=email, password=password)  # Using username as email
        if user is not None:
            login(request, user)
            return redirect('home')  # Redirect to home or dashboard page after login
        else:
            messages.error(request, 'Invalid login credentials')
    return render(request, 'users/login.html')


from django.http import HttpResponse

def submit_form(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        mobile = request.POST.get('mobile')
        message = request.POST.get('message')
        return HttpResponse("Form submitted successfully")
