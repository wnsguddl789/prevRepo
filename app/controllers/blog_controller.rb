require 'nokogiri'
require 'open-uri'

class BlogController < ApplicationController
  before_action :authenticate_user!

  def index
    @posts = Post.all
  end

  def write
    Post.create(content:params[:naeyong])
    redirect_to :root
  end

  def comment
    Comment.create(post_id:params[:post_id], msg:params[:msg])
    redirect_to :root
  end

  def post_write

  end
  #-------------------글 삭제-----------------------------#
  def post_destroy
    pd = Post.find(params[:id])
    pd.destroy
    redirect_to :root
  end
  #--------------------------------------------------------#
  #-------------------글 수정-----------------------------#
  def post_edit
    @post = Post.find(params[:id])
  end

  def post_update
    pu = Post.find(params[:id])
    pu.content = params[:naeyong]
    pu.save
    redirect_to :root
  end
  #--------------------------------------------------------#
  #------------------댓글 삭제-----------------------------#
  def comment_destroy
    cd = Comment.find(params[:id])
    cd.destroy
    redirect_to :root
  end
  #--------------------------------------------------------#
  #------------------댓글 수정-----------------------------#
  def comment_edit
    @comment = Comment.find(params[:id])
  end

  def comment_update
    cu = Comment.find(params[:id])
    cu.msg = params[:msg]
    cu.save
    redirect_to :root
  end
  #--------------------------------------------------------#
  def new_mj
    doc = Nokogiri::HTML(open('http://www.mju.ac.kr/mbs/mjukr/jsp/restaurant/restaurant.jsp?configIdx=36337&id=mjukr_051002050000'))
      @restaurant_name = doc.css('tbody tr td')[0].text
      @restaurant_location = doc.css('tbody tr td')[1].text
      @operating_hour = doc.css('tbody tr td')[2].text
      @period = doc.css('tbody tr td')[7].text
      #요일 메뉴를 변수에 저장
      @daily_menu_MON = []
      @daily_menu_TUE = []
      @daily_menu_WED = []
      @daily_menu_THU = []
      @daily_menu_FRI = []

      @menu = []
      #메뉴를 변수에 저장
      doc.css('td tr div[name=Monday_Data] p').each do |link|
        @daily_menu_MON << link.content
      end
      doc.css('td tr div[name=Tuesday_Data] p').each do |link|
        @daily_menu_TUE << link.content
      end
      doc.css('td tr div[name=Wedensday_Data] p').each do |link|
        @daily_menu_WED << link.content
      end
      doc.css('td tr div[name=Thursday_Data] p').each do |link|
        @daily_menu_THU << link.content
      end
      doc.css('td tr div[name=Friday_Data] p').each do |link|
        @daily_menu_FRI << link.content
      end

      doc.css('table [summary="월요일 식단내용"] td.txtc').each do |name|
        @menu << name.content
      end

  end
  #--------학식 크롤러 ------------------------------------#
  def haksik_mj
    doc = Nokogiri::HTML(open('http://www.mju.ac.kr/mbs/mjukr/jsp/restaurant/restaurant.jsp?configIdx=36337&id=mjukr_051002050000'))
      @restaurant_name = doc.css('tbody tr td')[0].text
      @restaurant_location = doc.css('tbody tr td')[1].text
      @operating_hour = doc.css('tbody tr td')[2].text
      @period = doc.css('tbody tr td')[7].text
      #요일 메뉴를 변수에 저장
      @daily_menu_MON = []
      @daily_menu_TUE = []
      @daily_menu_WED = []
      @daily_menu_THU = []
      @daily_menu_FRI = []

      @menu = []
      #메뉴를 변수에 저장
      doc.css('td tr div[name=Monday_Data] p').each do |link|
        @daily_menu_MON << link.content
      end
      doc.css('td tr div[name=Tuesday_Data]').each do |link|
        @daily_menu_TUE << link.content
      end
      doc.css('td tr div[name=Wedensday_Data]').each do |link|
        @daily_menu_WED << link.content
      end
      doc.css('td tr div[name=Thursday_Data]').each do |link|
        @daily_menu_THU << link.content
      end
      doc.css('td tr div[name=Friday_Data]').each do |link|
        @daily_menu_FRI << link.content
      end

      doc.css('table [summary="월요일 식단내용"] td.txtc').each do |name|
        @menu << name.content
      end
      puts @daily_menu_MON
  end

  def haksik_hg
    doc = Nokogiri::HTML(open('http://www.mju.ac.kr/mbs/mjukr/jsp/restaurant/restaurant.jsp?configIdx=36548&id=mjukr_051002020000'))
      @restaurant_name = doc.css('tbody tr td')[0].text
      @restaurant_location = doc.css('tbody tr td')[1].text
      @operating_hour = doc.css('tbody tr td')[2].text
      @period = doc.css('tbody tr td')[7].text
      #요일 메뉴를 변수에 저장
      @daily_menu_MON = []
      @daily_menu_TUE = []
      @daily_menu_WED = []
      @daily_menu_THU = []
      @daily_menu_FRI = []

      @menu = []

      #메뉴를 변수에 저장
      doc.css('td tr div[name=Monday_Data]').each do |link|
        @daily_menu_MON << link.content
      end
      doc.css('td tr div[name=Tuesday_Data]').each do |link|
        @daily_menu_TUE << link.content
      end
      doc.css('td tr div[name=Wedensday_Data]').each do |link|
        @daily_menu_WED << link.content
      end
      doc.css('td tr div[name=Thursday_Data]').each do |link|
        @daily_menu_THU << link.content
      end
      doc.css('td tr div[name=Friday_Data]').each do |link|
        @daily_menu_FRI << link.content
      end

      doc.css('td.txtc').each do |name|
        @menu << name.content
      end


  end

  def haksik_kj
    doc = Nokogiri::HTML(open('http://www.mju.ac.kr/mbs/mjukr/jsp/restaurant/restaurant.jsp?configIdx=58976&id=mjukr_051002040000'))
      @restaurant_name = doc.css('tbody tr td')[0].text
      @restaurant_location = doc.css('tbody tr td')[1].text
      @operating_hour = doc.css('tbody tr td')[2].text
      @period = doc.css('tbody tr td')[7].text
      #요일 메뉴를 변수에 저장
      @daily_menu_MON = []
      @daily_menu_TUE = []
      @daily_menu_WED = []
      @daily_menu_THU = []
      @daily_menu_FRI = []

      @menu = []
      #메뉴를 변수에 저장
      doc.css('td tr div[name=Monday_Data]').each do |link|
        @daily_menu_MON << link.content
      end
      doc.css('td tr div[name=Tuesday_Data]').each do |link|
        @daily_menu_TUE << link.content
      end
      doc.css('td tr div[name=Wedensday_Data]').each do |link|
        @daily_menu_WED << link.content
      end
      doc.css('td tr div[name=Thursday_Data]').each do |link|
        @daily_menu_THU << link.content
      end
      doc.css('td tr div[name=Friday_Data]').each do |link|
        @daily_menu_FRI << link.content
      end

      doc.css('table [summary="월요일 식단내용"] td.txtc').each do |name|
        @menu << name.content
      end
  end
end
