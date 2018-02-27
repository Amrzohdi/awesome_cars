class CreateCars < ActiveRecord::Migration[5.0]
  def change
    create_table :cars do |t|
      t.string :name
      t.string :colour
      t.references :type, foreign_key: true, index: true

      t.timestamps
    end
  end
end
