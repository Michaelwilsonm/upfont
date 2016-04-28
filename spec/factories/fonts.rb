FactoryGirl.define do
  factory :font do
    name Faker::Name.name
    font_url Faker::Name.name
    font_family Faker::Name.name
    weight Faker::Number.number(3)
    styles_by Faker::Name.name
    created_at Faker::Time.between(DateTime.now - 1, DateTime.now)
    updated_at Faker::Time.between(DateTime.now - 1, DateTime.now)
    cached_votes_total Faker::Number.number(2)
    cached_votes_score  Faker::Number.number(5)
    cached_votes_down Faker::Number.number(3)
    cached_votes_up Faker::Number.number(1)
  end
end
