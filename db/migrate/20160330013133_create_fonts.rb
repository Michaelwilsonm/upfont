class CreateFonts < ActiveRecord::Migration
  def change
    create_table :fonts do |t|
      t.string :name
      t.string :font_family
      t.string :weight
      t.string :styles_by

      t.timestamps null: false
    end
  end
end
