class AddColumnsToCars < ActiveRecord::Migration[5.0]
  def change
    add_column :cars, :price, :decimal
    add_column :cars, :horsepower, :decimal
  end
end
