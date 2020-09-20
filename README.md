# Institute Consultancy Bureau Information Management System (ICBIMS)

## About ICBIMS
Institute Consultancy Bureau Information Management System

### Project Preparation
```
    git clone https://github.com/omakei/ICB.git
```

### Install Project Dependancies
```
    composer install
```

### Database Preparation
    
   Rename .env.example to .env 
   Add your database credentials to .env 
 
 Create project database
 ```
    php artisan migrate
 ```
 
 Then populate the database with required data through seed
 ```
    php artisan db:seed
 ```
 
 ### Hosting the system locally
 ```
    php artisan serve
 ```
 
 Then go to the localhost:port-number though your browser
    
 # Note
    
   Everytime you pull from this repo makesure to:-
   ```
       php artisan migrate
   ```
   ,
   ```
      composer dump-autoload
   ```
   and
   ```
      php artisan config:clear
   ```

## License

Currently unknown
