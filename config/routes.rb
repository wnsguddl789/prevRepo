Rails.application.routes.draw do
  devise_for :users
  root 'home#index'

  devise_scope :model do
     get "/users/sign_out" => "devise/sessions#destroy"
 end

  get 'home/myongjin'
  get 'home/proffesor'
  get 'home/student'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
