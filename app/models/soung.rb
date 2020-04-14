class Soung < ApplicationRecord

  belongs_to :album

  validates :title, presence: true

  has_one_attached :file

end
