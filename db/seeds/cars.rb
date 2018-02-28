#array of different colours
colours = %w(red black blue yellow green)

#different car names
car_names = %w(Demon Bolt Kazam Devil Knockout Devil  Hoover Burner Roadrunner Taz Burn Fast
Smoke FuriousBrimstone Race Furiosa Firebrand Fast Imperator Furiosa Torch SpeedX Hannibal)

#get all type ids in an array
taype_ids = Type.ids
#this for creating cars with all car_names with random colour and random type.
Car.create (car_names.map do |car_name|
  {name: car_name, colour: colours.sample,type_id: taype_ids.sample}
end)
