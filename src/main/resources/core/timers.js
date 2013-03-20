/*
 * Copyright 2011-2012 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if (!vertx.setTimer) {
  vertx.setTimer    = vertx.__vertx.setTimer.bind(vertx.__vertx);
  vertx.setPeriodic = vertx.__vertx.setPeriodic.bind(vertx.__vertx);
  vertx.cancelTimer = vertx.__vertx.cancelTimer.bind(vertx.__vertx);
  vertx.runOnLoop   = vertx.__vertx.runOnLoop.bind(vertx.__vertx);
}