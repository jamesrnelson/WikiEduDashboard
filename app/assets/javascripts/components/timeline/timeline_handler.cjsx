React             = require 'react'
Router            = require 'react-router'
Link              = Router.Link
RouteHandler      = Router.RouteHandler

Timeline          = require './timeline'
Grading           = require './grading'
Wizard            = require '../wizard/wizard'
HandlerInterface  = require '../highlevels/handler'

TimelineHandler = React.createClass(
  displayName: 'TimelineHandler'
  render: ->
    <div>
      <RouteHandler />
      <Timeline {...@props} large_button=true />
      <Grading {...@props} large_button=true />
    </div>
)

module.exports = HandlerInterface(TimelineHandler)