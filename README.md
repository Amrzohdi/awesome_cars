git clone git@github.com:Amrzohdi/awesome_cars.git


cd awesome_cars

bundle install 

rake db:create db:migrate db:seed

rails s


another terminal for the client-side
____________________________________
cd awesome_cars/client

npm install

npm start

