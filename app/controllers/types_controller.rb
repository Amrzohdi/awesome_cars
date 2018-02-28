class TypesController < ApplicationController
  def index
    render json: Type.all
  end
end
