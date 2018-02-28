#this is an array of different types of cars
types= %w(SUV Truck Sedan Van Coupe Wagon Convertible Sports Car Diesel Crossover Luxury Car Hybrid/Electric Certified Pre-Owned)
#creating types of this array of types
Type.create types.map{|type| {name: type} }
