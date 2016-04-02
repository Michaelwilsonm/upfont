class SiteController < ApplicationController

  def index
    @fonts = Font.all
    session[:voting_id] = request.remote_ip
    @voter = Session.find_or_create_by(ip: session[:voting_id])
  end

  def upvote
    @font = Font.find(params[:id])
    session[:voting_id] = request.remote_ip
    @voter = Session.find_or_create_by(ip: session[:voting_id])
    @font.liked_by @voter, vote_weight: 4
    @voter.likes @font
    @post.votes_for.up.by_type(@voter).voters
    respond_to do |format|
      format.json { render json: @font }
    end
  end

  def most_popular
  end

end
