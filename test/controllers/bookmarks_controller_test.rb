require 'test_helper'

class BookmarksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get bookmarks_index_url
    assert_response :success
  end

  test "should get show" do
    get bookmarks_show_url
    assert_response :success
  end

end
