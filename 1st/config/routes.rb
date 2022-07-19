Rails.application.routes.draw do

  devise_for :users
  root 'blog#index'

  devise_scope :user do
      get "/users/sign_out" => "devise/sessions#destroy"
  end

  get 'blog/post_destroy'
  get 'blog/post_edit'
  get 'blog/post_update'
  get 'blog/post_write'

  get 'blog/comment_destroy'
  get 'blog/comment_edit'
  get 'blog/comment_update'

  get 'blog/haksik_mj'
  get 'blog/haksik_hg'
  get 'blog/haksik_kj'
  get 'blog/new_mj'

  get 'blog/coat'

  get '/users/sign_out' => 'devise/sessions#destroy'

  post '/write' => 'blog#write'
  post '/comment' => 'blog#comment'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
