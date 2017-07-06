class Post < ApplicationRecord
  
  belongs_to :user

  validates :title,:content, presence: true
  validates :title, length: { maximum: 20 }
  validates :title,:content, length: { maximum: 500 }

end
