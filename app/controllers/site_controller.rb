class SiteController < ApplicationController

  def index
    @fonts = Font.all
  end

end
