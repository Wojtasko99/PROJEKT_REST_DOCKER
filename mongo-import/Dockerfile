FROM mongo
COPY nowe_dane.csv /nowe_dane.csv
RUN mongoimport --db projekt --collection forms --type csv --file nowe_dane.csv --headerline