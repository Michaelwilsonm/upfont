class SiteController < ApplicationController

  def index
    @font_all = Font.all
    @fonts = Font.created_at
    session[:voting_id] = request.remote_ip
    @voter = Session.find_or_create_by(ip: session[:voting_id])
  end

  def upvote
    @font = Font.find(params[:id])
    session[:voting_id] = request.remote_ip
    @voter = Session.find_or_create_by(ip: session[:voting_id])
    @voter.likes @font
    @post.votes_for.up.by_type(@voter).voters
    respond_to do |format|
      format.json { render json: @font }
    end
  end

  def most_popular
    @font_order = Font.vote_order
    session[:voting_id] = request.remote_ip
    @voter = Session.find_or_create_by(ip: session[:voting_id])
  end

end
