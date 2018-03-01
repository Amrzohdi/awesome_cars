#different car names
car_names = %w(Demon Bolt Kazam Devil Knockout Devil  Hoover Burner Roadrunner Taz Burn Fast
Smoke FuriousBrimstone Race Furiosa Firebrand Fast Imperator Furiosa Torch SpeedX Hannibal)

#get all type ids in an array
taype_ids = Type.ids
#this for creating cars with all car_names with random colour and random type.
Car.create (car_names.map do |car_name|
  {name: car_name, price: srand % 100.5, horsepower: srand%1000.5 ,type_id: taype_ids.sample}
end)
