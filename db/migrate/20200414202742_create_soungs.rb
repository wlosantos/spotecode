class CreateSoungs < ActiveRecord::Migration[6.0]
  def change
    create_table :soungs do |t|
      t.string :title
      t.integer :played_count, null: false, default: 0
      t.references :album, null: false, foreign_key: true

      t.timestamps
    end
  end
end
