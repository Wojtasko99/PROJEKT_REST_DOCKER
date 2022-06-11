FROM mongo
COPY nowe_dane.csv /nowe_dane.csv
CMD mongoimport --db projekt --collection forms --type csv --file /nowe_dane.csv --headerline