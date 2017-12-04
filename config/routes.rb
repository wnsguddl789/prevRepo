Rails.application.routes.draw do
  devise_for :models
  root 'home#index'

  devise_scope :model do
     get "/models/sign_out" => "devise/sessions#destroy"
 end

  get 'home/myongjin_restaraunt'
  get 'home/officer_restaraunt'
  get 'home/student_restaraunt'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
