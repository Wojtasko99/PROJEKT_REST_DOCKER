#! /bin/bash
mongoimport --host=127.0.0.1 --db projekt --collection forms --type csv --file nowe_dane.csv --headerline