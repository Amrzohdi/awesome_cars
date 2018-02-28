class RemoveColumnsFromCars < ActiveRecord::Migration[5.0]
  def change
    remove_column :cars, :colour
  end
end
