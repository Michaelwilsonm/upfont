class Font < ActiveRecord::Base
  acts_as_votable

  def self.vote_order
    Font.order(cached_votes_up: :asc)
  end

  def self.created_at
    Font.order(created_at: :desc)
  end

end
