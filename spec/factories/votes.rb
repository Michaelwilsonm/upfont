FactoryGirl.define do
  factory :vote do
    votable_id Faker::Number.between(1, 30)
    votable_type "Font"
    voter_id  Faker::Number.between(1, 30)
    voter_type "Session"
    vote_flag Faker::Boolean.boolean
    vote_scope  Faker::Number.between(1, 30)
    vote_weight Faker::Number.between(1, 30)
    created_at Faker::Time.between(DateTime.now - 1, DateTime.now)
    updated_at Faker::Time.between(DateTime.now - 1, DateTime.now)
  end
end


