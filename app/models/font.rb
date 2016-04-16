class Font < ActiveRecord::Base
  # validates :name, presence: true
  # validates :font_family, presence: true
  # validates :styles_by, presence: true
  # validates :created_at, presence: true

  acts_as_votable

  def self.vote_order
    Font.order(cached_votes_up: :desc)
  end

  def self.created_at
    Font.order(created_at: :desc)
  end

end
