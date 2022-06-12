# PROJEKT ZALICZENIOWY - LABORATORIA INTEGRACJA SYSTEMÓW

Rok akademicki: 2021/2022 <br>
Semestr: 6<br>
Kierunek: Informatyka<br>
Przedmiot: Integracja systemów<br>
Grupa: IO 6.10<br>
Autorzy: Damian Wojtal, Michał Wrona<br>

TEMAT: POPULARNOŚĆ JĘZYKÓW PROGRAMOWANIA W ZALEŻNOŚCI OD WIEKU, PŁCI, REGIONU ZAMIESZKANIA I WYKSZTAŁCENIA


DO URUCHOMIENIA PROJEKTU POTRZEBA ZAINSTALOWAĆ:
node.js, docker, docker-compose

TECHNOLOGIE WYKORZYSTANE DO STWORZENIA PROJEKTU:
Mongodb, React, Express, Node, Docker, Docker-compose

PROJEKT OPRACOWYWANY W SRODOWISKU: VISUAL STUDIO CODE

SPEŁNIONE WYMAGANIA FUNKCJONALNE DO PROJEKTU:

1. Obsługa usługi SOAP lub REST dla pobierania danych. //PLIKI forms.js, users.js
2. Eksport danych w formacie XML lub JSON //PLIK saveFile.js
3. Zapis pozyskanych danych do bazy danych aplikacji oraz odczyt danych z bazy do aplikacji z wykorzystaniem ORM. //PLIKI form.js, forms.js, user.js, users.js
4. Implementacja mechanizmu uwierzytelnienia i autoryzacji.// PLIK auth.js, user.js

SPEŁNIONE WYMAGANIA POZA FUNKCJONALNE DO PROJEKTU:

1. Wykorzystanie warstwy graficznej: interface użytkownika, pobieranie danych, wyświetlanie wyników itd. //REACT, CSS, PLIKI ZNAJDUJACE SIĘ W FOLDERZE CLIENT
2. Stworzenie kontenera Docker obejmującego stworzoną aplikację lub zespół aplikacji wraz ze wszystkimi koniecznymi do działania składnikami. //PLIKI DOCKERFILE, DOCKER-COMPOSE.YAML

SPOSÓB URUCHOMIENIA PROJEKTU:
1. Uruchomienie kontenerów poleceniem docker-compose up
# Z POWODU NIEWYJAŚNIONYCH PRZYCZYN I PROBLEMÓW PRZY PIERWSZYM URUCHOMIENIU PROJEKTU NALEŻY URUCHOMIĆ SKRYPT ZNAJDUJĄCY SIĘ NA KONTENERZE MONGO O NAZWIE IMPORT.SH:
2.1. Otworzyc nowy terminal<br>
2.2. Poleceniem docker ps -a sprawdzić nazwę kontenera MONGODB<br>
2.3. Uruchomić skrypt importujący dane poleceniem: docker exec nazwa_kontenera /import.sh<br>
3. Utworzyć nowe konto w celu używania serwisu.<br>
4. Zalogować się do serwisu.<br>
