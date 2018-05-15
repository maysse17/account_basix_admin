from rest_framework import serializers
from django.contrib.auth import get_user_model


UserModel = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        print(validated_data)
        user = UserModel.objects.create(
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
        )
        user.set_password(validated_data['password1'])
        user.save()

        return user

    class Meta:
        model = UserModel
        fields = ('username', 'first_name', 'last_name', 'email', 'password')
        write_only_fields = ('password',)
        read_only_fields = ('id',)
