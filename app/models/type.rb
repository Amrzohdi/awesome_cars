class Type < ApplicationRecord
  has_many :cars, foreign_key: :id
end
