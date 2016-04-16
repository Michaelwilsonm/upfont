class AddFontUrlToFonts < ActiveRecord::Migration
  def change
    add_column :fonts, :font_url, :text
  end
end
