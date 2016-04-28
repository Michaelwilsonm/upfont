require "rails_helper"

RSpec.describe SiteController, :type => :controller do
  describe "GET index" do
    subject { get :index }

    it "has a 200 status code" do
      get :index
      expect(response.status).to eq(200)
    end
    it "renders the index template" do
      expect(subject).to render_template(:index)
    end
  end

  describe "GET most_popular" do
    subject { get :most_popular }

    it "has a 200 status code" do
      get :most_popular
      expect(response.status).to eq(200)
    end
    it "renders the most popular template" do
      expect(subject).to render_template(:most_popular)
    end
  end
end
