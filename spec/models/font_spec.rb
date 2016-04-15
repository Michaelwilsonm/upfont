require 'rails_helper'

RSpec.describe Font, type: :model do

  it "valid factory" do
    expect(build(:font)).to be_valid
  end

  let(:font) { build(:font) }

  it { expect(font).to validate_presence_of(:name) }

  it { expect(font).to validate_presence_of(:font_family) }

  it { expect(font).to validate_presence_of(:styles_by) }

end