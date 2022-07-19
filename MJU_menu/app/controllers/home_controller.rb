require 'nokogiri'
require 'open-uri'

class HomeController < ApplicationController

  def index
    @menu_name = "MJU_menu : Introduction"
  end

  #--------학식 크롤러 ------------------------------------#
  def myongjin

    @menu_name = "myongjin_restaraunt : Menu"

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
      #td tr div[name=Wedensday_Data] 저번 크롤링
      doc.css('td tr td p').each do |link|
        @daily_menu_MON << link.content
      end
      doc.css('td tr td p').each do |link|
        @daily_menu_TUE << link.content
      end
      doc.css('td tr td p').each do |link|
        @daily_menu_WED << link.content
      end
      doc.css('td tr td p').each do |link|
        @daily_menu_THU << link.content
      end
      doc.css('td tr td p').each do |link|
        @daily_menu_FRI << link.content
      end

      doc.css('table [summary="월요일 식단내용"] td.txtc').each do |name|
        @menu << name.content
      end
  end

  def student
    @menu_name = "student_restaraunt : Menu"

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

  def officer

  end
    #--------학식 크롤러 끝-----------------------------------#

end
