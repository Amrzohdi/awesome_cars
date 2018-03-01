class Car < ApplicationRecord
  scope :by_type, ->(type_id){where(type_id: type_id)}
  scope :by_name, ->(name){where("name like ?","%#{name}%")}
  scope :by_horsepower, ->(horsepower) {where(horsepower: horsepower)}
  belongs_to :type
end
