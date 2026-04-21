import os
import django
import json

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')
django.setup()

from api.models import Movie, Genre

def seed():
    Movie.objects.all().delete()
    Genre.objects.all().delete()

    action = Genre.objects.create(name='Action', slug='action')
    scifi = Genre.objects.create(name='Sci-Fi', slug='sci-fi')
    drama = Genre.objects.create(name='Drama', slug='drama')
    thriller = Genre.objects.create(name='Thriller', slug='thriller')
    animation = Genre.objects.create(name='Animation', slug='animation')
    adventure = Genre.objects.create(name='Adventure', slug='adventure')
    comedy = Genre.objects.create(name='Comedy', slug='comedy')

    # Список с надежными ссылками Yandex Avatars
    movies_data = [
        {"id": "tt1", "title": "Inception", "year": 2010, "imdb": 8.8, "poster": "https://avatars.mds.yandex.net/i?id=86c00c42aab77a4611597f98648a256c58926974-5336899-images-thumbs&n=13", "genres": [action, scifi]},
        {"id": "tt2", "title": "Interstellar", "year": 2014, "imdb": 8.7, "poster": "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/7c031614-cf07-4abb-bbe7-4fb9bd14e938/1920x", "genres": [scifi, drama]},
        {"id": "tt3", "title": "The Dark Knight", "year": 2008, "imdb": 9.0, "poster": "https://avatars.mds.yandex.net/i?id=4ddd7aa0c114d519754368db2b009b55_l-5467951-images-thumbs&n=13", "genres": [action, drama]},
        {"id": "tt4", "title": "Parasite", "year": 2019, "imdb": 8.6, "poster": "https://avatars.mds.yandex.net/i?id=e10aab81fd5c14886345257aaf78aeae29ba834d-4666194-images-thumbs&n=13", "genres": [drama, thriller]},
        {"id": "tt5", "title": "The Matrix", "year": 1999, "imdb": 8.7, "poster": "https://avatars.mds.yandex.net/i?id=efe0f9d89f5f80587ec212a223a424d1_l-5236515-images-thumbs&n=13", "genres": [action, scifi]},
        {"id": "tt6", "title": "Joker", "year": 2019, "imdb": 8.4, "poster": "https://avatars.mds.yandex.net/i?id=4ad83644fd221425b5ff676b3dbc8b29_l-5320725-images-thumbs&n=13", "genres": [drama, thriller]},
        {"id": "tt7", "title": "Spirited Away", "year": 2001, "imdb": 8.6, "poster": "https://i.pinimg.com/736x/a4/8b/80/a48b80c53e9c8d74225a4f6185cb5e1a.jpg", "genres": [animation, adventure]},
        {"id": "tt8", "title": "Oppenheimer", "year": 2023, "imdb": 8.4, "poster": "https://avatars.mds.yandex.net/i?id=74dc4d60a14483f3f371fc21976db2c2_l-10702343-images-thumbs&n=13", "genres": [drama]},
        {"id": "tt9", "title": "Barbie", "year": 2023, "imdb": 6.9, "poster": "https://avatars.mds.yandex.net/i?id=24668e41add4bdd7db672ca464ad590b_l-5880570-images-thumbs&n=13", "genres": [comedy, adventure]},
        {"id": "tt10", "title": "Into spider-verse", "year": 2018, "imdb": 8.4, "poster": "https://avatars.mds.yandex.net/i?id=fd1052654ea417bcc6b25bd99f4db754d6b748fa-4435853-images-thumbs&n=13", "genres": [animation, action]},
        {"id": "tt11", "title": "The Godfather", "year": 1972, "imdb": 9.2, "poster": "https://avatars.mds.yandex.net/i?id=3259b0f47e3a950b71906030b144410e_l-10114643-images-thumbs&n=13", "genres": [drama]},
        {"id": "tt12", "title": "Pulp Fiction", "year": 1994, "imdb": 8.9, "poster": "https://avatars.mds.yandex.net/i?id=f0122e117b3a9e0a0d0d6030b1259c43_l-10259832-images-thumbs&n=13", "genres": [drama, thriller]},
        {"id": "tt13", "title": "Fight Club", "year": 1999, "imdb": 8.8, "poster": "https://avatars.mds.yandex.net/i?id=e3a65c27a2e3a09e0a0d6030b1154c43_l-10103282-images-thumbs&n=13", "genres": [drama]},
        {"id": "tt14", "title": "Forrest Gump", "year": 1994, "imdb": 8.8, "poster": "https://avatars.mds.yandex.net/i?id=d2a65c117e3a09e0a0d6030b1054c43_l-10257621-images-thumbs&n=13", "genres": [drama, comedy]},
        {"id": "tt15", "title": "Gladiator", "year": 2000, "imdb": 8.5, "poster": "https://avatars.mds.yandex.net/i?id=85707953075d741b376a26abf4f66109aa91b5c5-5161119-images-thumbs&n=13", "genres": [action, drama]},
        {"id": "tt16", "title": "Titanic", "year": 1997, "imdb": 7.9, "poster": "https://avatars.mds.yandex.net/i?id=f8614e9dc69217d96c7d27c02e4b00c2_l-9705291-images-thumbs&n=13", "genres": [drama]},
        {"id": "tt17", "title": "Avatar 2", "year": 2022, "imdb": 7.6, "poster": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/e9d4ad4a-ac53-448f-8e24-93cbcec1fb5f/1920x", "genres": [scifi, action]},
        {"id": "tt18", "title": "Shawshank", "year": 1994, "imdb": 9.3, "poster": "https://avatars.mds.yandex.net/i?id=82a65c007e3a09e0a0d6030b0554c43_l-10666666-images-thumbs&n=13", "genres": [drama]},
        {"id": "tt19", "title": "Green Mile", "year": 1999, "imdb": 8.6, "poster": "https://avatars.mds.yandex.net/i?id=4eac3a0013474e89d25672d1cee8c6fae28bde7b-10959457-images-thumbs&n=13", "genres": [drama]},
        {"id": "tt20", "title": "Lion King", "year": 1994, "imdb": 8.5, "poster": "https://avatars.mds.yandex.net/i?id=62a65c117e3a09e0a0d6030b0354c43_l-10888888-images-thumbs&n=13", "genres": [animation, adventure]}
    ]

    for m in movies_data:
        Movie.objects.create(
            title=m['title'],
            release_year=m['year'],
            imdb_id=m['id'],
            imdb_rating=m['imdb'],
            poster_url=m['poster'],
            description=f"A masterpiece."
        ).genres.add(*m['genres'])

    print("Success! Database seeded with stable Yandex posters. 🎬💎✨")

if __name__ == '__main__':
    seed()
