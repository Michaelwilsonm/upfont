class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.integer :ip
    end
  end
end
