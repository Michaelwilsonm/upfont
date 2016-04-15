require 'rails_helper'

RSpec.describe Vote, type: :model do

  it "valid factory" do
    expect(build(:vote)).to be_valid
  end

  let(:vote) { build(:vote) }

end