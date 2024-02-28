:bicyclist: [@iterable-iterator/consume](https://iterable-iterator.github.io/consume)
==

Iterable consumption for JavaScript.
See [docs](https://iterable-iterator.github.io/consume/index.html).

```js
import {exhaust} from '@iterable-iterator/consume';
import {map} from '@iterable-iterator/map';
import {range} from '@iterable-iterator/range';
exhaust(map((i) => {console.log(i)}, range(10))); // 0 1 2 ...
```

[![License](https://img.shields.io/github/license/iterable-iterator/consume.svg)](https://raw.githubusercontent.com/iterable-iterator/consume/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@iterable-iterator/consume.svg)](https://www.npmjs.org/package/@iterable-iterator/consume)
[![Tests](https://img.shields.io/github/actions/workflow/status/iterable-iterator/consume/ci.yml?branch=main&event=push&label=tests)](https://github.com/iterable-iterator/consume/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/iterable-iterator/consume.svg)](https://github.com/iterable-iterator/consume/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/iterable-iterator/consume.svg)](https://github.com/iterable-iterator/consume/issues)
[![Downloads](https://img.shields.io/npm/dm/@iterable-iterator/consume.svg)](https://www.npmjs.org/package/@iterable-iterator/consume)

[![Code issues](https://img.shields.io/codeclimate/issues/iterable-iterator/consume.svg)](https://codeclimate.com/github/iterable-iterator/consume/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/iterable-iterator/consume.svg)](https://codeclimate.com/github/iterable-iterator/consume/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/iterable-iterator/consume/main.svg)](https://codecov.io/gh/iterable-iterator/consume)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/iterable-iterator/consume.svg)](https://codeclimate.com/github/iterable-iterator/consume/trends/technical_debt)
[![Documentation](https://iterable-iterator.github.io/consume/badge.svg)](https://iterable-iterator.github.io/consume/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@iterable-iterator/consume)](https://bundlephobia.com/result?p=@iterable-iterator/consume)
