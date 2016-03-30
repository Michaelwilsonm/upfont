class SiteController < ApplicationController

  def index
    @fonts = Font.all
  end

  def upvote
    @font = Font.find(params[:id])
    session[:voting_id] = request.remote_ip
    voter = Session.find_or_create_by(ip: session[:voting_id])
    voter.likes @font
    respond_to do |format|
      format.html { redirect_to :back }
      format.js
    end
  end

end
