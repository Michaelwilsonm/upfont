# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160416055707) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "fonts", force: :cascade do |t|
    t.string   "name"
    t.string   "font_family"
    t.string   "weight"
    t.string   "styles_by"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.integer  "cached_votes_total", default: 0
    t.integer  "cached_votes_score", default: 0
    t.integer  "cached_votes_up",    default: 0
    t.integer  "cached_votes_down",  default: 0
    t.text     "font_url"
  end

  add_index "fonts", ["cached_votes_down"], name: "index_fonts_on_cached_votes_down", using: :btree
  add_index "fonts", ["cached_votes_score"], name: "index_fonts_on_cached_votes_score", using: :btree
  add_index "fonts", ["cached_votes_total"], name: "index_fonts_on_cached_votes_total", using: :btree
  add_index "fonts", ["cached_votes_up"], name: "index_fonts_on_cached_votes_up", using: :btree

  create_table "sessions", force: :cascade do |t|
    t.integer "ip"
  end

  create_table "votes", force: :cascade do |t|
    t.integer  "votable_id"
    t.string   "votable_type"
    t.integer  "voter_id"
    t.string   "voter_type"
    t.boolean  "vote_flag"
    t.string   "vote_scope"
    t.integer  "vote_weight"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "votes", ["votable_id", "votable_type", "vote_scope"], name: "index_votes_on_votable_id_and_votable_type_and_vote_scope", using: :btree
  add_index "votes", ["voter_id", "voter_type", "vote_scope"], name: "index_votes_on_voter_id_and_voter_type_and_vote_scope", using: :btree

end
