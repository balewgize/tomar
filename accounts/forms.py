from django import forms
from django.contrib.auth import forms as admin_forms
from django.contrib.auth import get_user_model

from allauth.account.forms import SignupForm

from .models import Profile

User = get_user_model()


class UserAdminChangeForm(admin_forms.UserChangeForm):
    class Meta(admin_forms.UserChangeForm.Meta):
        model = User


class UserAdminCreationForm(admin_forms.UserCreationForm):
    """
    Form for User Creation in the Admin Area.
    To change user signup, see UserSignupForm and UserSocialSignupForm.
    """

    class Meta(admin_forms.UserCreationForm.Meta):
        model = User

        error_messages = {
            "username": {"unique": "This username has already been taken."}
        }


class UserSignupForm(SignupForm):
    """
    Form that will be rendered on a user sign up section/screen.
    Default fields will be added automatically.
    Check UserSocialSignupForm for accounts created from social.
    """


class UserUpdateForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ["first_name", "last_name"]


class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ["title", "about"]
